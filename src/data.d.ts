// data.d.ts

// Define the type for the breakpoint object
type Breakpoint = {
    max: number;
    min: number;
  };
  
  // Define the type for the responsive object
  type Responsive = {
    superLargeDesktop: {
      breakpoint: Breakpoint;
      items: number;
    };
    desktop: {
      breakpoint: Breakpoint;
      items: number;
    };
    tablet: {
      breakpoint: Breakpoint;
      items: number;
    };
    mobile: {
      breakpoint: Breakpoint;
      items: number;
    };
  };
  
  // Define the type for each item in the subData array
  type SubDataItem = {
    id: number;
    img: string;
    card_title: string;
    card_text: string;
    button_text: string;
  };
  
  // Define the type for the subData array
  type SubData = SubDataItem[];
  
  // Export the types
  export declare const responsive: Responsive;
  export declare const subData: SubData;
  