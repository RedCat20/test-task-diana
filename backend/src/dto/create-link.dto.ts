import { IsString, IsUrl, Length } from 'class-validator';

export class LinkDto {
  @IsString({ message: 'Property title must be a string' })
  @Length(3, 20, {
    message: 'Property title must have a length from 3 to 20 symbols',
  })
  title: string;

  @IsString({ message: 'Property url must be a string' })
  @IsUrl()
  @Length(3, 50, {
    message: 'Property url must have a length from 3 to 50 symbols',
  })
  url: string;
  id?: number;
}
