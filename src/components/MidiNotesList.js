// src/components/MidiNotesList.js
import React, { useState } from 'react';
import { Midi } from '@tonejs/midi';

function MidiNotesList({ midiFile }) {
	const [notes, setNotes] = useState([]);

	const handleParseMidi = () => {
		const reader = new FileReader();
		reader.onload = async (event) => {
			const arrayBuffer = event.target.result;
			const midiData = new Uint8Array(arrayBuffer);
			const midi = new Midi(midiData);
			
			const parsedNotes = midi.tracks.reduce((allNotes, track) => {
				const trackNotes = track.notes.map(note => note.midi);
				return allNotes.concat(trackNotes);
			}, []);
			
			setNotes(parsedNotes);
		};
		reader.readAsArrayBuffer(midiFile);
	};

	return (
		<div>
			<button onClick={handleParseMidi}>Parse MIDI</button>
			<ul>
				{notes.map((note, index) => (
					<li key={index}>Note: {note}</li>
				))}
			</ul>
		</div>
	);
}

export default MidiNotesList;
