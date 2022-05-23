/** @module midi/PhysicalPiano */

/**
 * Interface that connects and works with the external MIDI input device
 */
export class PhysicalPiano {
  midi: WebMidi.MIDIAccess;

  /**
   * Set up and configure external MIDI input device to be interfaced
   * @constructor
   */
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

  /**
   * Try to get access to the physical MIDI device
   *
   * @returns a promise to when a MIDI device is connected
   */
  requestMIDIAccess(): Promise<WebMidi.MIDIAccess> {
    if (!navigator.requestMIDIAccess) {
      console.error("MIDI is not supported in this browser");
      return undefined;
    } else {
      return navigator.requestMIDIAccess();
    }
  }

  /**
   * Will enable messages for any input given from the physical MIDI device.
   */
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
