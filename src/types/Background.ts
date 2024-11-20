// Interface for the proficiency details
interface Proficiency {
  index: string;
  name: string;
  url: string;
}

// Interface for equipment details
interface Equipment {
  equipment: Proficiency;
  quantity: number;
}

// Interface for option sets that include a resource list URL
interface ResourceListOptionSet {
  option_set_type: string;
  resource_list_url: string;
}

// Interface for option sets that include equipment categories
interface EquipmentCategoryOptionSet {
  option_set_type: string;
  equipment_category: Proficiency;
}

// Interface for option sets that include an array of options
interface OptionsArray {
  option_set_type: string;
  options: Array<{
    option_type: string;
    string?: string;
    desc?: string;
    alignments?: Proficiency[];
  }>;
}

// Interface for the feature of a background
interface Feature {
  name: string;
  desc: string[];
}

// Interface for language options, personality traits, ideals, bonds, and flaws
interface ChoiceOption {
  choose: number;
  type: string;
  from: ResourceListOptionSet | EquipmentCategoryOptionSet | OptionsArray;
}

// Main interface for the background
interface Background {
  index: string;
  name: string;
  starting_proficiencies: Proficiency[];
  language_options: ChoiceOption;
  starting_equipment: Equipment[];
  starting_equipment_options: ChoiceOption[];
  feature: Feature;
  personality_traits: ChoiceOption;
  ideals: ChoiceOption;
  bonds: ChoiceOption;
  flaws: ChoiceOption;
  url: string;
}

// Type for the array of backgrounds
export default Background;
