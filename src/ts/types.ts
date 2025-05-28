
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

interface SmartphoneMessage {
  id: string;
  name: string;
  content: string;
  date: string;
  reaction?: string;
  reactionNumber?: number;
  sender?: boolean;
  avatar?: string;
}

interface SmartphoneResponses {
  id: string;
  messages: SmartphoneMessage[];
  nextLineId: string;
}

interface DialogueLine {
    id: string;
    name?: string;
    text?: string;
    style?: 'speech' | 'thinking';
    textPosition?: 'right' | 'left' | 'center' | 'narrator' | 'none';
    dontSave?: boolean,
    video?: string;
    isOverUi?: boolean;
    background?: string;
    smartphone?: boolean;
    smartphoneMessages?: SmartphoneMessage[];
    smartphoneChoices?: {
        text: string;
        nextLineId: string;
    }[];
    smartphoneResponses?: SmartphoneResponses[];
    backgroundVideo?: string;
    backgroundTransition?: backgroundImageTransitionType;
    music?: string;
    loopMusic?: boolean;
    sound?: string;
    voice?: string;
    stopMusic?: boolean;
    stopSound?: boolean;
    stopVoice?: boolean;
    startGame?: boolean;
    pauseGame?: boolean;
    unpauseGame?: boolean;
    stopGame?: boolean;
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
      nextLineId: string;
    }[];
    nextLineId?: string;
    noNextLine?: boolean;
};

export { FadeTransitionType };
export type { DialogueLine, SmartphoneMessage };