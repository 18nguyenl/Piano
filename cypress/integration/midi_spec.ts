import { PhysicalPiano } from "../../dist/module";

describe("Midi Setup Working", () => {
  it("Web Midi supported in browser", () => {
    expect(!!navigator.requestMIDIAccess).to.equal(true);
  });
  it("PhysicalMidi lib is recognized", () => {
    expect(!!PhysicalPiano).to.equal(true);
  });
  it("Physical Piano is recognized", () => {
    const piano = new PhysicalPiano();
    cy.wrap(piano.requestMIDIAccess()).its("inputs.size").should("be.above", 0);
  });
});
