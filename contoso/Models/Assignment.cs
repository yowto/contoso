using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace contoso.Models
{
    public class Assignment
    {
        public int AssignmentID { get; set; }
        public string AssignmentTitle { get; set; }
        public int Percent { get; set; }
        public int StudentID { get; set; }
        public int CourseID { get; set; }
        public DateTime DueDate { get; set; }

        [JsonIgnore]
        public virtual ICollection<Course> Course { get; set; }
    }
}