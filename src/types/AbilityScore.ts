type AbilityScoreIndex = "cha" | "con" | "dex" | "int" | "str" | "wis";

// Skill Type
type Skill = {
    index?: string; // OPTIONAL: Resource index for shorthand searching
    level?: number; // OPTIONAL: Level of the referenced resource
    name?: string;  // OPTIONAL: Name of the referenced resource
    url?: string;   // OPTIONAL: URL of the referenced resource
};

// Ability Score Response
type AbilityScore= {
    index?: string;    // OPTIONAL: Resource index for shorthand searching
    level?: number;    // OPTIONAL: Level of the referenced resource
    name?: string;     // OPTIONAL: Name of the referenced resource
    url?: string;      // OPTIONAL: URL of the referenced resource
    desc?: string[];   // OPTIONAL: Description of the resource
    full_name?: string; // OPTIONAL: Full name of the ability score
    skills?: Skill[];  // OPTIONAL: List of skills that use this ability score
};

export default AbilityScore;