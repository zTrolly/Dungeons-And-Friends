// Base interface for generic references
interface APIReference {
  index?: string;
  name?: string;
  url?: string;
  level?: number;
}

// Interface for item rarity
interface Rarity {
  name?: 'Varies' | 'Common' | 'Uncommon' | 'Rare' | 'Very Rare' | 'Legendary' | 'Artifact';
}

// Interface for variants of the resource
interface Variant extends APIReference {
  variant?: boolean;
}

// Interface for the main resource encompassing all properties
interface Resource {
  index?: string;
  name?: string;
  url?: string;
  level?: number;
  desc?: string[];
  equipment_category?: APIReference;
  rarity?: Rarity;
  variants?: Variant[];
}