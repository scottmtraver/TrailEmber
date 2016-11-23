export default function(server) {

  let venue = server.create('venue');
  server.createList('sponsor', 5);
  server.createList('venue', 4);
  server.createList('race', 5, { venue });

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  // server.createList('post', 10);
}
