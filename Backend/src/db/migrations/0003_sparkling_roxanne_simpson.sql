ALTER TABLE "audio_chunks" ADD COLUMN "transcription" text NOT NULL;--> statement-breakpoint
ALTER TABLE "audio_chunks" DROP COLUMN "trascription";