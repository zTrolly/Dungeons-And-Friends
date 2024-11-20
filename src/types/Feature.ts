// Interface for a class associated with a feature
interface ClassReference {
  index: string;
  name: string;
  url: string;
}

// Interface for the feature itself
interface Feature {
  index: string;
  class: ClassReference;
  name: string;
  level: number;
  prerequisites: any[]; // Assuming prerequisites can vary in structure, more specific interfaces could be applied if structure is known
  desc: string[];
  url: string;
}


export default Feature;