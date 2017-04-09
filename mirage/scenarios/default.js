export default function(server) {

  let venue = server.create('venue');
  let sponsor = server.create('sponsor');
  server.createList('sponsor', 5);
  server.createList('venue', 4);
  server.createList('race', 5, { venue, sponsor });
  server.createList('card', 2);

  server.create('page', { title: 'Homepage', videoUrl: 'https://www.youtube.com/watch?v=QE5qJ6Xw4FI' });
  server.create('page', { title: 'Registration' });
  server.create('page', { title: 'Scoring and Standings' });

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  // server.createList('post', 10);
}
