// Interface for referencing features with optional properties
interface FeatureReference {
  index?: string;
  name?: string;
  url?: string;
  level?: number;
}

// Interface for spellcasting details
interface Spellcasting {
  cantrips_known?: number;
  spells_known?: number;
  spell_slots_level_1?: number;
  spell_slots_level_2?: number;
  spell_slots_level_3?: number;
  spell_slots_level_4?: number;
  spell_slots_level_5?: number;
  spell_slots_level_6?: number;
  spell_slots_level_7?: number;
  spell_slots_level_8?: number;
  spell_slots_level_9?: number;
}

// Interface for class-specific details, flexible to include any specific attribute
interface ClassSpecific {
  [key: string]: any;
}

// Interface for the class level including optional spellcasting and class-specific details
interface ClassLevel {
  index?: string;
  url?: string;
  level?: number;
  ability_score_bonuses?: number;
  prof_bonus?: number;
  features?: FeatureReference[];
  spellcasting?: Spellcasting;
  class_specific?: ClassSpecific;
}