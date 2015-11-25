using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace contoso.Models
{
    public class Enrollment
    {
        public int EnrollmentID { get; set; }
        public int CourseID { get; set; }
        public int StudentID { get; set; }

        [JsonIgnore]
        public virtual Course Course { get; set; }
        [JsonIgnore]
        public virtual Student Student { get; set; }
    }
}