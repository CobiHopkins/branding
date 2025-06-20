import { render } from "@testing-library/react";
import AnimatedLoadingBalls from "../components/AnimatedLoadingBalls/AnimatedLoadingBalls";

describe(AnimatedLoadingBalls, () => {
    it("Creates a bouncing ball on the screen", () => {
        const { container } = render(<AnimatedLoadingBalls pxSize={20}/>);
        const balls = container.querySelectorAll('.loading-ball');
        expect(balls.length).toBe(3);
    });
});