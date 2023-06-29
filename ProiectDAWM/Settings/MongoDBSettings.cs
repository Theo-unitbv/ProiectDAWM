using System;
namespace ProiectDAWM.Settings
{
  public class MongoDBSettings : IMongoDBSettings
  {
    public string MoviesCollectionName { get; set; }
    public string ConnectionString { get; set; }
    public string DatabaseName { get; set; }
  }
}

