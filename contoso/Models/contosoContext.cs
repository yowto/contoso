using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;

namespace contoso.Models
{
    public class contosoContext : DbContext
    {
        public class MyConfiguration : DbMigrationsConfiguration<contosoContext>
        {
            public MyConfiguration()
            {
                this.AutomaticMigrationsEnabled = true;
                this.AutomaticMigrationDataLossAllowed = false;
            }

            protected override void Seed(contosoContext context)
            {
                var students = new List<Student>
            {
                new Student { FirstName = "Carson",   LastName = "Alexander"},
                new Student { FirstName = "Meredith", LastName = "Alonso"},
                new Student { FirstName = "Arturo",   LastName = "Anand"},
                new Student { FirstName = "Gytis",    LastName = "Barzdukas"},
                new Student { FirstName = "Yan",      LastName = "Li"},
                new Student { FirstName = "Peggy",    LastName = "Justice"},
                new Student { FirstName = "Laura",    LastName = "Norman" },
                new Student { FirstName = "Nino",     LastName = "Olivetto"}
            };
                students.ForEach(s => context.Students.AddOrUpdate(p => p.LastName, s));
                context.SaveChanges();

                var courses = new List<Course>
            {
                new Course {CourseID = 1050, Title = "Chemistry",  PercentComplete= 0  },
                new Course {CourseID = 4022, Title = "Microeconomics", PercentComplete= 0 },
                new Course {CourseID = 4041, Title = "Macroeconomics",  PercentComplete= 0 },
                new Course {CourseID = 1045, Title = "Calculus",       PercentComplete= 0  },
                new Course {CourseID = 3141, Title = "Trigonometry",   PercentComplete= 0  },
                new Course {CourseID = 2021, Title = "Composition",   PercentComplete= 0  },
                new Course {CourseID = 2042, Title = "Literature",   PercentComplete= 0  }
            };
                courses.ForEach(s => context.Courses.AddOrUpdate(p => p.Title, s));
                context.SaveChanges();

                var assignments = new List<Assignment>
                {
                    new Assignment
                    {
                        StudentID = students.Single(s => s.LastName == "Alexander").ID,
                        CourseID = courses.Single(c => c.Title == "Chemistry" ).CourseID,
                        AssignmentTitle = "Assignment 1",
                        DueDate = DateTime.Parse("2015-12-01"),
                        Percent = 10
                    },
                    new Assignment
                    {
                        StudentID = students.Single(s => s.LastName == "Anand").ID,
                        CourseID = courses.Single(c => c.Title == "Chemistry" ).CourseID,
                        AssignmentTitle = "Assignment 1",
                        DueDate = DateTime.Parse("2015-12-01"),
                        Percent = 10
                    }
                };
                assignments.ForEach(s => context.Assignments.AddOrUpdate(p => p.AssignmentTitle, s));
                context.SaveChanges();

                var tests = new List<Test>
                {
                    new Test
                    {
                        StudentID = students.Single(s => s.LastName == "Alexander").ID,
                        CourseID = courses.Single(c => c.Title == "Chemistry" ).CourseID,
                        TestTitle = "Test1",
                        DueDate = DateTime.Parse("2015-12-01"),
                        Percent = 10
                    },
                    new Test
                    {
                        StudentID = students.Single(s => s.LastName == "Anand").ID,
                        CourseID = courses.Single(c => c.Title == "Chemistry" ).CourseID,
                        TestTitle = "Test 1",
                        DueDate = DateTime.Parse("2015-12-01"),
                        Percent = 10
                    }
                };
                tests.ForEach(s => context.Tests.AddOrUpdate(p => p.TestTitle, s));
                context.SaveChanges();

                var enrollments = new List<Enrollment>
            {
                new Enrollment {
                    StudentID = students.Single(s => s.LastName == "Alexander").ID,
                    CourseID = courses.Single(c => c.Title == "Chemistry" ).CourseID
                },
                 new Enrollment {
                    StudentID = students.Single(s => s.LastName == "Alexander").ID,
                    CourseID = courses.Single(c => c.Title == "Microeconomics" ).CourseID
                 },
                 new Enrollment {
                    StudentID = students.Single(s => s.LastName == "Alexander").ID,
                    CourseID = courses.Single(c => c.Title == "Macroeconomics" ).CourseID
                 },
                 new Enrollment {
                     StudentID = students.Single(s => s.LastName == "Alonso").ID,
                    CourseID = courses.Single(c => c.Title == "Calculus" ).CourseID
                 },
                 new Enrollment {
                     StudentID = students.Single(s => s.LastName == "Alonso").ID,
                    CourseID = courses.Single(c => c.Title == "Trigonometry" ).CourseID
                 },
                 new Enrollment {
                    StudentID = students.Single(s => s.LastName == "Alonso").ID,
                    CourseID = courses.Single(c => c.Title == "Composition" ).CourseID
                 },
                 new Enrollment {
                    StudentID = students.Single(s => s.LastName == "Anand").ID,
                    CourseID = courses.Single(c => c.Title == "Chemistry" ).CourseID
                 },
                 new Enrollment {
                    StudentID = students.Single(s => s.LastName == "Anand").ID,
                    CourseID = courses.Single(c => c.Title == "Microeconomics").CourseID
                 },
                new Enrollment {
                    StudentID = students.Single(s => s.LastName == "Barzdukas").ID,
                    CourseID = courses.Single(c => c.Title == "Chemistry").CourseID
                 },
                 new Enrollment {
                    StudentID = students.Single(s => s.LastName == "Li").ID,
                    CourseID = courses.Single(c => c.Title == "Composition").CourseID
                 },
                 new Enrollment {
                    StudentID = students.Single(s => s.LastName == "Justice").ID,
                    CourseID = courses.Single(c => c.Title == "Literature").CourseID
                 }
            };

                foreach (Enrollment e in enrollments)
                {
                    var enrollmentInDataBase = context.Enrollments.Where(
                        s =>
                             s.Student.ID == e.StudentID &&
                             s.Course.CourseID == e.CourseID).SingleOrDefault();
                    if (enrollmentInDataBase == null)
                    {
                        context.Enrollments.Add(e);
                    }
                }
                context.SaveChanges();
            }
        }
    
        public contosoContext() : base("name=contosoContext")
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<contosoContext, MyConfiguration>());
        }

        public System.Data.Entity.DbSet<contoso.Models.Student> Students { get; set; }

        public System.Data.Entity.DbSet<contoso.Models.Course> Courses { get; set; }

        public System.Data.Entity.DbSet<contoso.Models.Enrollment> Enrollments { get; set; }

        public System.Data.Entity.DbSet<contoso.Models.Assignment> Assignments { get; set; }

        public System.Data.Entity.DbSet<contoso.Models.Test> Tests { get; set; }
    }
}
