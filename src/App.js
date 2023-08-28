// src/App.js
import React from 'react';
import MidiUploader from './components/MidiUploader';

function App() {
	const handleMidiUpload = (file) => {
		// Здесь вы можете обработать загруженный MIDI файл
		console.log('Uploaded MIDI file:', file);
	};

	return (
		<div className="App">
			<h1>NoteScape</h1>
			<MidiUploader onMidiUpload={handleMidiUpload} />
		</div>
	);
}

export default App;
