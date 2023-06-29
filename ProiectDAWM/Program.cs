using System.Reflection;
using Microsoft.Extensions.Options;
using ProiectDAWM.Services;
using ProiectDAWM.Settings;


var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<MongoDBSettings>(builder.Configuration.GetSection(nameof(MongoDBSettings)));
builder.Services.AddSingleton<IMongoDBSettings>(sp => sp.GetRequiredService<IOptions<MongoDBSettings>>().Value);
builder.Services.AddCors(options =>
{
  options.AddPolicy(name: "CorsPolicy",
                            policy =>
                            {
                              policy.WithOrigins("http://localhost:4200")
                                .AllowAnyHeader()
                                .AllowAnyMethod()
                                .AllowCredentials();
                            });
});
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<IMoviesCollection, MoviesCollection>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("CorsPolicy");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

