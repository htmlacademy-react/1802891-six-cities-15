import { Host } from './host';
import { OfferPreviews } from './offer-preview';

export type Offer = {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
} & OfferPreviews
