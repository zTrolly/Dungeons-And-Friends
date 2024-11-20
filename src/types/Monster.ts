// Base reference interface for various API links
interface APIReference {
  index?: string;
  name?: string;
  url?: string;
  level?: number;
}

// Interface for damage types
interface DamageType extends APIReference {
  damage_dice?: string;
}

// Interface for actions, which could include attacks
interface Action {
  name?: string;
  desc?: string;
  action_options?: Choice;
  attack_bonus?: number;
  dc?: DC;
  damage?: DamageType[];
}

// Interface for choices available in actions or abilities
interface Choice {
  desc?: string;
  choose?: number;
  type?: string;
  from?: Action[];
}

// DC related details
interface DC {
  dc_type?: APIReference;
  dc_value?: number;
  success_type?: string;
}

// Monster's special abilities
interface SpecialAbility {
  name?: string;
  desc?: string;
  attack_bonus?: number;
  damage?: DamageType;
}

// Spellcasting capabilities
interface Spellcasting {
  ability?: APIReference;
  dc?: number;
  modifier?: number;
  components_required?: string[];
  school?: string;
  slots?: Object;
  spells?: SpellDetail[];
}

// Detailed spells in spellcasting
interface SpellDetail {
  name?: string;
  level?: number;
  url?: string;
  usage?: Usage;
}

// Usage details for spells or abilities
interface Usage {
  type?: string;
  times?: number;
  rest_types?: string[];
}

// Speed attributes for a monster
interface Speed {
  walk?: string;
  burrow?: string;
  climb?: string;
  fly?: string;
  swim?: string;
}

// Main monster interface including all possible properties
interface Monster {
  index?: string;
  name?: string;
  url?: string;
  desc?: string[];
  level?: number;
  type?: string;
  subtype?: string;
  size?: string;
  alignments?: string;
  armor_class?: number;
  hit_points?: number;
  hit_dice?: string;
  hit_points_roll?: string;
  strength?: number;
  dexterity?: number;
  constitution?: number;
  intelligence?: number;
  wisdom?: number;
  charisma?: number;
  proficiencies?: APIReference[];
  damage_resistances?: string[];
  damage_immunities?: string[];
  damage_vulnerabilities?: string[];
  condition_immunities?: APIReference[];
  senses?: Senses;
  languages?: string;
  challenge_rating?: number;
  actions?: Action[];
  reactions?: Action[];
  legendary_actions?: Action[];
  special_abilities?: SpecialAbility[];
  speed?: Speed;
  image?: string;
  spellcasting?: Spellcasting;
}

// Senses that a monster may have
interface Senses {
  passive_perception?: number;
  blindsight?: string;
  darkvision?: string;
  tremorsense?: string;
  truesight?: string;
}

export default Monster;