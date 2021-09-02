export class Charge {
  _id!: string;
  id!: string;
  occurred_at!: string;
  source!: string;
  user!: string;
  object!: string;
  api_version!: string;
  content!: object;
  event_type!: string;
  webhook_status!: string;
  createdAt!: Date;
}
