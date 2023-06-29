using System;
namespace ProiectDAWM.Settings
{
  public interface IMongoDBSettings
  {
    string MoviesCollectionName { get; set; }
    string ConnectionString { get; set; }
    string DatabaseName { get; set; }
  }
}

