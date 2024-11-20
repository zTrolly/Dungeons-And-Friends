// Path Parameter Type
type AlignmentIndex = "chaotic-neutral" | "chaotic-evil" | "chaotic-good" | 
                      "lawful-neutral" | "lawful-evil" | "lawful-good" | 
                      "neutral" | "neutral-evil" | "neutral-good";

// Alignment Response Type
type AlignmentResponse = {
    index?: string;         // OPTIONAL: Resource index for shorthand searching
    level?: number;         // OPTIONAL: Level of the referenced resource
    name?: string;          // OPTIONAL: Name of the referenced resource
    url?: string;           // OPTIONAL: URL of the referenced resource
    desc?: string;          // OPTIONAL: Brief description of the resource
    abbreviation?: string;  // OPTIONAL: Abbreviation/initials/acronym for the alignment
};

export default AlignmentResponse;