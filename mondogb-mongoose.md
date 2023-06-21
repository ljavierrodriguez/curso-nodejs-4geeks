<p align="center" style="background: white;">
    <img src="./assets/mongodb.png" />
</p>

# What is MongoDB?

***MongoDB*** is a document database that offers great scalability and flexibility, and a model of advanced indexing and queries.

# Main Features

## Ad Hoc queries

MongoDB supports field searches, ranges, and regular expressions queries. Queries can return a specific field of the document, but can also be a user-defined function for better use.

## Indexation

Any field in a MongoDB field can be indexed, or it is possible to create secondary indexes. The concept of secondary indexes in MongoDB is similar to the one used in relational databases.

## Replication

MongoDB supports the primary-secondary type of replication. Each group of primary and its secondaries is called a replica set. The primary can execute read and write commands. The secondaries replicate the primary data and can only be used to read or for backup copies, but write operations cannot be done. The secondaries have the ability to choose a new primary in case the current one does not respond.

## Load balancing

MongoDB can scale in a horizontal fashion using the concept of [shard. The developer chooses a sharding key, which determines how the data of a collection will be distributed. The data is divided into ranges (based on the sharding key) and distributed across multiple shards. Each shard can be a replica set. MongoDb has the capacity to run on multiple servers, balancing the load and/or replicating the data in order to keep the system running in the event of a hardware failure. The automatic configuration is easy to deploy under MongoDB and new servers can be added to MongoDB with the database system running.

## File Storage

MongoDb can be used like a filesystem, taking advantage of the capacity of MongoDB for load balancing and data replication in multiple servers. This functionality, called GridFS15​ included in the official distribution, deploys a series of functions and methods to manage files and content on top of the drivers, not on top of the server. In a system with multiple servers, the files can be distributed and replicated among them seamlessly, thus creating an efficient fault-tolerant system with load balancing. 

## Aggregation

MongoDb provides an aggregation framework that allows operations similar to “GROUP BY” of SQL. The aggregation framework is built like a pipeline in which data passes through different stages in which they are modified, added, filtered, and formatted until the desired result is obtained. All this process is capable of using indexes, if available, and executes in memory. In addition, MongoDB provides a MapReduce function that can be used for batch processing of data and aggregation operations.

<p>&nbsp;</p>

<p align="center">
  <img height="200" src="./assets/mongoose.png" />
</p>


# What is Mongoose?

***Mongoose*** is a library for Node.js that allows us to write queries for a MongoDB database, with features like validations, queries construction, middlewares, type conversions, and some others, that enhance the database functionality.

# Features

MongoDB provides an incredible amount of functionalities to create and work with schemes. Mongoose currently contains eight SchemaTypes that a property keeps like when you preserve a MongoDB.
These are:

- String
- Number
- Date
- Buffer
- Boolean
- Mixed
- ObjectId
- Array

