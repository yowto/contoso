using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace contoso.Models
{
    public class Course
    {
        public int CourseID { get; set; }
        public string Title { get; set; }
        public int PercentComplete { get; set; }

        [JsonIgnore]
        public virtual Assignment Assignment { get; set; }
        [JsonIgnore]
        public virtual Test Test { get; set; }
        [JsonIgnore]
        public virtual ICollection<Enrollment> Enrollments { get; set; }
    }
}