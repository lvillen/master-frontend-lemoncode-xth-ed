import { MemberEntity } from '@/services/api-model';

export const getMembers = async (org: string): Promise<MemberEntity[]> => {
  const members = await fetch(`https://api.github.com/orgs/lemoncode/members`)
        .then((response) => response.json())
          
  return members
}