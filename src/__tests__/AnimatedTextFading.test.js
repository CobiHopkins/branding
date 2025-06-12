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

    // Initial text
    expect(container.textContent).toContain(items[0]);

    // --- First cycle ---

    // Step 1: advance to interval firing (text hidden, index not changed yet)
    await act(async () => {
      jest.advanceTimersByTime(animationDelay);
      await Promise.resolve();
    });
    expect(container.textContent).toContain(items[0]); // still first item

    // Step 2: advance to inner timeout (text updated)
    await act(async () => {
      jest.advanceTimersByTime(1000);
      await Promise.resolve();
    });
    expect(container.textContent).toContain(items[1]); // second item now visible

    // --- Second cycle ---

    // Step 3: advance to next interval firing (hide text again)
    await act(async () => {
      jest.advanceTimersByTime(animationDelay);
      await Promise.resolve();
    });
    expect(container.textContent).toContain(items[1]); // still second item (hidden)

    // Step 4: advance to next timeout (show next text)
    await act(async () => {
      jest.advanceTimersByTime(1000);
      await Promise.resolve();
    });
    expect(container.textContent).toContain(items[2]); // third item now visible
  });
});