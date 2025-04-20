type DialogueLine = {
    id: string;  // Unique ID for the line
    name: string;
    text: string;
    background?: string;
    music?: string;
    sound?: string;
    voice?: string;
    stopMusic?: boolean;
    stopSound?: boolean;
    stopVoice?: boolean;
    soundFade?: {
      duration: number;
      fadeOut: boolean;
    };
    voiceFade?: {
      duration: number;
      fadeOut: boolean;
    };
    musicFade?: {
      duration: number;
      fadeOut: boolean;
    };
    charactersOnScreen?: {
      left?: string;
      right?: string;
      leftMood?: string;
      rightMood?: string;
      leftFlip?: boolean;
      rightFlip?: boolean;
    };
    choices?: {
      text: string;
      nextLineId: string; // Reference to the next line by ID
    }[];
    nextLineId?: string; // Optional next line ID for direct transitions
};

  export default DialogueLine;