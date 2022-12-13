import { Column, Entity, PrimaryColumn } from "typeorm";
import { UserOutputData } from "../../../data/types/output";

@Entity()
export class UserModel implements UserOutputData {
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
}
