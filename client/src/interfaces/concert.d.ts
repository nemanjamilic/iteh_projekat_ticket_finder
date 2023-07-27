import { BaseKey } from '@pankod/refine-core';

export interface FormFieldProp {
  title: string,
  labelName: string
}

export interface FormValues {
    title: string,
    description: string,
    concertType: string,
    location: string,
    price: number | undefined,
}

export interface ConcertCardProps {
  id?: BaseKey | undefined,
  title: string,
  location: string,
  price: string,
  photo: string,
}
