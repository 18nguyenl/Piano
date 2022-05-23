export class PhysicalPiano {
  midi: WebMidi.MIDIAccess;

  constructor() {
    this.requestMIDIAccess().then(
      (midi) => {
        this.midi = midi;
      },
      () => {
        console.error("MIDI devices not allowed or detected");
      }
    );
  }

  requestMIDIAccess(): Promise<WebMidi.MIDIAccess> {
    if (!navigator.requestMIDIAccess) {
      console.error("MIDI is not supported in this browser");
      return undefined;
    } else {
      return navigator.requestMIDIAccess();
    }
  }

  debugMIDI() {
    function onMIDIMessage(message) {
      console.log(message.data);
    }

    const inputs = this.midi.inputs.values();
    for (
      let input = inputs.next();
      input && !input.done;
      input = inputs.next()
    ) {
      // each time there is a midi message call the onMIDIMessage function
      input.value.onmidimessage = onMIDIMessage;
    }
  }
}
