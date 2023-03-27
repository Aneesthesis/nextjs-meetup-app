import MeetupList from "../components/meetups/MeetupList";

function HomePage() {
  const DUMMY_MEETUPS = [
    {
      id: "m1",
      title: "First",
      image:
        "https://secure.meetupstatic.com/photos/event/a/0/a/d/600_505901133.jpeg",
      address: "Some address, 12345 X City",
      description: "This is  a first meeting!",
    },
    {
      id: "m2",
      title: "Second",
      image:
        "https://secure.meetupstatic.com/photos/event/a/0/a/d/600_505901133.jpeg",
      address: "Some address, 78907 X City",
      description: "This is the second meeting!",
    },
  ];

  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
