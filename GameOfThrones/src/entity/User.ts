import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Phrases {
  @PrimaryGeneratedColumn()
  id:number;
  
  @Column()  
  sentence: string;

  @Column()
  characterName: string;
  
  @Column()
  characterSlug: string;
  
  @Column()
  characterHouseName: string;
    
  @Column()
  characterHouseSlug: string;
  
  };
