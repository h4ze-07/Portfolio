type Position = 'top' | 'bottom' | 'left' | 'right' | string;

export const variant = (position: Position) => {

    return {
        initial: {
            x: position === 'left' ? '-100%' : position === 'right' ? '100%' : 0,
            y: position === 'top' ? '-100%' : position === 'bottom' ? '100%' : 0,
            opacity: 0,
        },
        inView: {
            x: 0,
            y: 0,
            opacity: 1,
        }
    }
}
    
export const transitionV = (delay: number = 0.5, dur: number = 1, ease: string = 'easeOut') => {
    return {
        delay: delay,
        duration: dur,
        ease: ease,
    }
}
