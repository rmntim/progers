"use client";
import {
  type Call,
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  StreamTheme,
  SpeakerLayout,
  CallControls,
  CallParticipantsList,
} from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
import { env } from "~/env";
import { useSession } from "next-auth/react";
import { type Room } from "~/server/db/schema";
import { generateToken } from "~/app/rooms/[roomId]/actions";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import { useRouter } from "next/navigation";

const apiKey = env.NEXT_PUBLIC_STREAM_API_KEY;

export default function VideoPlayer({ room }: { room: Room }) {
  const session = useSession();
  const router = useRouter();
  const [client, setClient] = useState<StreamVideoClient | null>(null);
  const [call, setCall] = useState<Call | null>(null);

  useEffect(() => {
    if (!session.data) {
      return;
    }
    const userId = session.data.user.id;

    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: userId,
        name: session.data.user.name ?? "Unknown",
        image: session.data.user.image ?? undefined,
      },
      tokenProvider: () => generateToken(),
    });
    setClient(client);
    const call = client.call("default", room.id);
    void call.join({ create: true });
    setCall(call);

    return () => {
      call
        .leave()
        .then(() => client.disconnectUser())
        .catch(console.error);
    };
  }, [session, room.id]);

  return (
    client &&
    call && (
      <StreamVideo client={client}>
        <StreamCall call={call}>
          <StreamTheme>
            <SpeakerLayout />
            <CallControls onLeave={() => router.push("/")} />
            <CallParticipantsList onClose={() => undefined} />
          </StreamTheme>
        </StreamCall>
      </StreamVideo>
    )
  );
}
