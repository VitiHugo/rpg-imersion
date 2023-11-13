import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class characters {
  @PrimaryGeneratedColumn()
  character_id: number

  setting_id: number
  
  @Column()
  first_name: string

  @Column()
  last_name: string
  
  @Column()
  image: string
  
  @Column()
  description: string
  
  @Column()
  origin: string
  
  @Column()
  faction: string
  
  @Column()
  size: string
    
  @Column()
  race: string
  
  @Column()
  alive: boolean
  
  @Column()
  beyond_url: string
  
  @Column()
  status: boolean
  
  @Column()
  modified_by: number
  
  @Column()
  created_at: Date
  
  @Column()
  updated_at: Date
  
  @Column()
  area_id: number

  @Column()
  description: string


  infos: NpcInfo[]
}