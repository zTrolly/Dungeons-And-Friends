// Interface for a generic reference item, used in various places
interface ReferenceItem {
  index: string;
  name: string;
  url: string;
}

// Interface for equipment with quantity
interface EquipmentWithQuantity {
  equipment: ReferenceItem;
  quantity: number;
}

// Interface for choices within proficiency choices and equipment options
interface ChoiceOption {
  desc?: string;
  choose: number;
  type: string;
  from: OptionSet;
}

// Interface for the actual options within choice structures
interface Option {
  option_type: string;
  item?: ReferenceItem;
  count?: number;
  of?: ReferenceItem;
  choice?: ChoiceOption;
}

// Interface for the structure of the options array or other types
interface OptionSet {
  option_set_type: string;
  options?: Option[];
  resource_list_url?: string;
  equipment_category?: ReferenceItem;
}

// Interface for the feature of a character class (multi-classing prerequisites)
interface MultiClassingPrerequisite {
  ability_score: ReferenceItem;
  minimum_score: number;
}

// Interface for multi-classing details
interface MultiClassing {
  prerequisites: MultiClassingPrerequisite[];
  proficiencies: ReferenceItem[];
}

// Main interface for the character class
interface CharacterClass {
  index: string;
  name: string;
  hit_die: number;
  proficiency_choices: ChoiceOption[];
  proficiencies: ReferenceItem[];
  saving_throws: ReferenceItem[];
  starting_equipment: EquipmentWithQuantity[];
  starting_equipment_options: ChoiceOption[];
  class_levels: string;
  multi_classing: MultiClassing;
  subclasses: ReferenceItem[];
  url: string;
}

export default CharacterClass;
