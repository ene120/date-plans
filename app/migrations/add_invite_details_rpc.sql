-- Run this in your Supabase SQL editor to add the get_invite_details function
-- This allows the invite page to show personalized greetings

create or replace function public.get_invite_details(p_invite_code text)
returns json as $$
declare
  v_couple_id uuid;
  v_couple_name text;
  v_partner1 text;
  v_partner2 text;
  v_inviter text;
begin
  -- First try couple_invites table
  select ci.couple_id into v_couple_id
  from public.couple_invites ci
  where ci.invite_code = p_invite_code
    and ci.status = 'pending'
    and ci.expires_at > now()
  limit 1;

  -- Fallback: try couples table invite_code
  if v_couple_id is null then
    select c.id into v_couple_id
    from public.couples c
    where c.invite_code = p_invite_code;
  end if;

  if v_couple_id is null then
    return null;
  end if;

  -- Get couple name
  select name into v_couple_name
  from public.couples where id = v_couple_id;

  -- Get partner names from preferences
  select partner1_name, partner2_name
  into v_partner1, v_partner2
  from public.preferences where couple_id = v_couple_id;

  -- Get inviter display name
  select display_name into v_inviter
  from public.profiles
  where couple_id = v_couple_id and role = 'owner'
  limit 1;

  return json_build_object(
    'couple_name', v_couple_name,
    'partner1_name', coalesce(v_partner1, v_inviter, 'Your partner'),
    'partner2_name', coalesce(v_partner2, 'there'),
    'inviter_name', coalesce(v_inviter, v_partner1, 'Your partner')
  );
end;
$$ language plpgsql security definer;
