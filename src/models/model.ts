export interface Npc {
  id: number,
  name: string,
  area_id: number,
  description: string,
  infos: NpcInfo[]
}

export interface NpcInfo {
  id: number,
  title: string,
  value: string
}