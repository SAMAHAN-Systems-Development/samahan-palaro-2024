import { Member } from '@/types/member.type';
import { TWGGroup } from '@/types/twgGroup.type';

export async function getTWGGroups(): Promise<TWGGroup[]> {
    const data = await import('@/data/palarongAtenistaTwgData.json');
    const group = data.TWG.map(
      (group: { groupName: string; members: Member[] }) => ({
        name: group.groupName,
        members: group.members,
      })
    );
  
    return group;
  }