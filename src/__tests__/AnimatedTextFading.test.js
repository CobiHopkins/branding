import { render, act } from "@testing-library/react";
import AnimatedTextFading from "../components/AnimatedTextFading/AnimatedTextFading";

beforeEach(() => {
    jest.useFakeTimers();
});

afterEach(() =>  {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
});

describe(AnimatedTextFading, () => {
    it("cycles text with fade in/out properly", async () => {
      const items = ["The first text item", "The second text item", "The third text item"];
      const animationDelay = 5000;

      const { container } = render(
        <AnimatedTextFading animationDelay={animationDelay} items={items} variant="xlarge" className="txt-wlight" />
      );

      expect(container.textContent).toContain(items[0]);
      
      await act(async () => {
        jest.advanceTimersByTime(animationDelay);
        await Promise.resolve();
      });
      expect(container.textContent).toContain(items[0]);

      await act(async () => {
        jest.advanceTimersByTime(1000);
        await Promise.resolve();
      });
      expect(container.textContent).toContain(items[1]);

      await act(async () => {
        jest.advanceTimersByTime(animationDelay);
        await Promise.resolve();
      });
      expect(container.textContent).toContain(items[1]);

      await act(async () => {
        jest.advanceTimersByTime(1000);
        await Promise.resolve();
      });
      expect(container.textContent).toContain(items[2]);
  });
});