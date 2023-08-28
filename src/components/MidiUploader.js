// src/components/MidiUploader.js
import React, { useState } from 'react';

function MidiUploader({ onMidiUpload }) {
	const [selectedFile, setSelectedFile] = useState(null);

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		setSelectedFile(file);
		if (file) {
			onMidiUpload(file);
		}
	};

	return (
		<div>
			<input type="file" accept=".midi,.mid" onChange={handleFileChange} />
			{selectedFile && <p>Selected MIDI file: {selectedFile.name}</p>}
		</div>
	);
}

export default MidiUploader;
