// Note types
export interface Note {
  id: string;
  title: string;
  content_json: string; // Stores stringified Lexical JSON state
  raw_markdown?: string; // Optional raw markdown
  created_at: string;
  updated_at: string;
}

// Error Message type
export interface ErrorMessage {
  id: string;
  message: string;
}

// Block types
export interface Block {
  id: string;
  content: string;
  type: 'paragraph' | 'heading' | 'bullet' | 'code' | 'quote';
  level?: number; // For headings (1-6) or bullet indentation level
  parentId?: string; // For hierarchical structure
}

// Audio types
export interface AudioRecording {
  id: string;
  noteId: string;
  filePath: string;
  duration: number; // in milliseconds
  recordedAt: string;
}

export interface AudioBlockReference {
  id: string;
  recordingId: string;
  blockId: string;
  audioOffsetMs: number; // timestamp within the audio recording
}

// App state types
export interface AppState {
  notes: Note[];
  selectedNoteId: string | null;
  isRecording: boolean;
  currentRecordingId: string | null;
  audioRecordings: AudioRecording[];
  audioBlockReferences: AudioBlockReference[];
}

// Settings types
export interface AppSettings {
  notesDirectory: string;
  audioDirectory: string;
  theme: 'light' | 'dark';
  editorFontSize: number;
  editorFontFamily: string;
}

// Note metadata type (returned from backend)
export interface NoteMetadata {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
}

export interface BlockReference {
  id: string;
  referencing_page_id: string;
  referencing_block_id: string;
  referenced_page_id: string;
  referenced_block_id: string;
  created_at: string; // Assuming RFC3339 date string
}

