<?php

require_once 'lib/mustache/mustache.inc.php';

CbMustacheEngine::instance(array('loader' => CbMustacheEngine::getFilesystemLoader(__DIR__)));

echo CbMustacheEngine::instance()->render('test', [
    "PageTitle" => "Culturebase - One Pager",
    "Navigation" => [
        [
            "Name" => "Hero",
            "Href" => "hero-anchor"
        ],
        [
            "Name" => "Content",
            "Href" => "content-anchor"
        ],
        [
            "Name" => "Accordion",
            "Href" => "accordion-anchor"
        ],
        [
            "Name" => "Video",
            "Href" => "video-anchor"
        ],
        [
            "Name" => "Contact",
            "Href" => "contact-anchor"
        ]
    ],
    "HasHero" => true,
    "Hero" => [
        "Name" => "TEST Casper Heinemann",
        "Job" => "Art Director / Film",
        "Description" => '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut <strong>labore et dolore</strong> magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  </p><h2>Headline H2</h2><p><strong>Duis autem vel eum iriure dolor</strong> in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.   </p><h3>Unordered List Headline H3</h3><ul> <li>Praesent luptatum zzril</li><li>Ipsum dolor sit amet</li><li>Aliquam erat volutpat</li></ul><p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p><h3>Ordered List Headline H3</h3><ol> <li>Ipsum dolor sit amet</li><li>Praesent luptatum zzril</li><li>Aliquam erat volutpat</li></ol><p><strong>Duis autem vel eum iriure dolor</strong> in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.   </p><p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>'
    ]
]);
