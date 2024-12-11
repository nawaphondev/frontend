export interface Nft {
    id: number;
    title: string;
    creator?: string; // Optional field for the creator's name
    instant_price?: number; // Optional field for instant price
    price: number;
    ending_in?: string; // Optional field for auction ending time
    last_bid?: number; // Optional field for last bid amount
    image: string; // URL or path to the NFT image
    avatar?: string; // Optional field for the creator's avatar
  }
  