// Interface for the ability score required as a prerequisite
interface AbilityScoreRequirement {
  index: string;
  name: string;
  url: string;
}

// Interface for the prerequisites of the feat
interface Prerequisite {
  ability_score: AbilityScoreRequirement;
  minimum_score: number;
}

// Interface for the feat itself
interface Feat {
  index: string;
  name: string;
  prerequisites: Prerequisite[];
  desc: string[];
  url: string;
}

export default Feat;
