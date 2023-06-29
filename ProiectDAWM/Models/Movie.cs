using System;
namespace ProiectDAWM.Models
{
  public class Movie
  {
    public Guid Id { get; set; }
    public string Title { get; set; }
    public string Producer { get; set; }
    public int Year { get; set; }
    public int Length { get; set; }
    public int Rating { get; set; }
    public bool Editable { get; set; }
  }
}

