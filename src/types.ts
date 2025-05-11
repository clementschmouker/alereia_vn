
enum FadeTransitionType {
    easeIn = "ease-in",
    easeOut = "ease-out",
    easeInOut = "ease-in-out",
}

interface backgroundImageTransitionType {
  easing: FadeTransitionType;
  duration?: number;
  delay?: number;
}

interface DialogueLine {
    id: string;  // Unique ID for the line
    name?: string;
    text: string;
    video?: string;
    background?: string;
    backgroundVideo?: string;
    backgroundTransition?: backgroundImageTransitionType;
    music?: string;
    sound?: string;
    voice?: string;
    stopMusic?: boolean;
    stopSound?: boolean;
    stopVoice?: boolean;
    callback?: () => void;
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
      middle?: string;
      leftMood?: string;
      rightMood?: string;
      middleMood?: string;
      leftFlip?: boolean;
      rightFlip?: boolean;
      middleFlip?: boolean;
    };
    choices?: {
      text: string;
      nextLineId: string; // Reference to the next line by ID
    }[];
    nextLineId?: string; // Optional next line ID for direct transitions
};

export { FadeTransitionType };
export type { DialogueLine };