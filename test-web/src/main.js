import { PhysicalPiano } from "../../dist/module";

const piano = new PhysicalPiano();
piano.requestMIDIAccess().then((midi) => {
    console.log(midi.inputs.size)
})