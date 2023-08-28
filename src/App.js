// src/App.js
import React from 'react';
import MidiUploader from './components/MidiUploader';
import MidiNotesList from './components/MidiNotesList';

function App() {
	const [selectedMidi, setSelectedMidi] = React.useState(null);

	const handleMidiUpload = (file) => {
		setSelectedMidi(file);
	};

	return (
		<div className="App">
			<h1>NoteScape</h1>
			<MidiUploader onMidiUpload={handleMidiUpload} />
			{selectedMidi && <MidiNotesList midiFile={selectedMidi} />}
		</div>
	);
}

export default App;
